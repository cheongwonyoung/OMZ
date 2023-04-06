package com.ssafy.omz.service;

import com.ssafy.omz.exception.UnAuthorizedException;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.time.Duration;
import java.util.Date;

@Service("JwtService")
public class JwtServiceImpl implements JwtService{


    public static final Logger logger = LoggerFactory.getLogger(JwtServiceImpl.class);

//    // access token secret_key
//    private static final String AT_SECRET_KEY  = "CREATEDBYWY_AT";
//    // refresh token secret_key
//    private static final String RT_SECRET_KEY  = "CREATEDBYWY_RT";

    // token secret_key
    private static final String SECRET_KEY  = "CREATEDBYWY";

    // access token 생성
    @Override
    public <T> String createAccessToken(String key, T data) {
        // 유효시간 : 30분
        return create(key, data, "access-token", 1000*60*30*2);
    }

    // refresh token 생성
    @Override
    public <T> String createRefreshToken(String key, T data) {
        // 유효시간 : 14일
        return create(key, data, "refresh-token", 1000*60*60*24*14);
    }

    @Override
    public <T> String create(String key, T data, String subject, long expire) {
        String jwt = Jwts.builder()
                // Header 설정 : 토큰의 타입, 해쉬 알고리즘 정보 세팅.
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("regDate", System.currentTimeMillis()) // 생성 시간
                // Payload 설정 : 유효기간(Expiration), 토큰 제목 (Subject), 데이터 (Claim) 등 정보 세팅.
                .setExpiration(new Date(System.currentTimeMillis() + expire)) // 토큰 유효기간
                .setSubject(subject) // 토큰 제목 설정 ex) access-token, refresh-token
                .claim(key, data) // 저장할 데이터
                // Signature 설정 : secret key를 활용한 암호화.
                .signWith(SignatureAlgorithm.HS256, this.generateKey())
                .compact(); // 직렬화 처리.
        return jwt;
    }

    private byte[] generateKey() {

        byte[] key = null;
//        String salt = null;
//        if(subject.equals("access-token")){
//            salt = "CREATEDBYWY_AT";
//        }
//        else if(subject.equals("refresh-token")){
//            salt = "CREATEDBYWY_RT";
//        }
        try {
            // charset 설정 안하면 사용자 플랫폼의 기본 인코딩 설정으로 인코딩 됨.
            key = SECRET_KEY.getBytes("UTF-8");


        } catch (UnsupportedEncodingException e) {
            if (logger.isInfoEnabled()) {
                e.printStackTrace();
            } else {
                logger.error("Making JWT Key Error ::: {}", e.getMessage());
            }
        }

        return key;
    }

    //	전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
    @Override
    public boolean checkToken(String jwt) {
        logger.info("checkToken : {}", jwt);
        try {


//			Json Web Signature? 서버에서 인증을 근거로 인증정보를 서버의 private key로 서명 한것을 토큰화 한것
//			setSigningKey : JWS 서명 검증을 위한  secret key 세팅
//			parseClaimsJws : 파싱하여 원본 jws 만들기
            logger.info("1111111111111111111");

            Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(jwt);

            logger.info("222222222222222222222");

            // 만료가 되었는지 확인
            if(!claims.getBody().getExpiration().before(new Date())){
                //			Claims는 Map의 구현체 형태
                logger.debug("claims: {}", claims);
                return true;
            }
            else{
                return false;
            }
//

        } catch (Exception e) {
//			if (logger.isInfoEnabled()) {
//				e.printStackTrace();
//			} else {
            logger.error(e.getMessage());
//			}
			throw new UnAuthorizedException();
//			개발환경
//            return false;
        }
    }


}
