package com.ssafy.omz.interceptor;

import com.ssafy.omz.exception.UnAuthorizedException;
import com.ssafy.omz.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
@Component
public class JwtInterceptor implements HandlerInterceptor {

    public static final Logger logger = LoggerFactory.getLogger(JwtInterceptor.class);

    private static final String HEADER_AUTH = "access_token";

    private final JwtService jwtService;


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        final String token = request.getHeader(HEADER_AUTH);

        if(token != null && jwtService.checkToken(token )){
            logger.info("토큰 사용 가능 : {}", token);
            return true;
        }else{
            logger.info("토큰 사용 불가능 : {}", token);
            throw new UnAuthorizedException();
        }

    }

}