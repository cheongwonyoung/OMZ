package com.ssafy.omz.service;

import org.springframework.stereotype.Service;

@Service
public interface JwtService {

    // access token 발급
    <T> String createAccessToken(String key, T data);

    // refresh token 발급
    <T> String createRefreshToken(String key, T data);

    // token 발급에 사용
    <T> String create(String key, T data, String subject, long expire);

//    Map<String, Object> get(String key);
//    String getUserId();
//    boolean checkToken(String jwt);

    // 토큰 유효한지 체크
    public boolean checkToken(String jwt);


}
