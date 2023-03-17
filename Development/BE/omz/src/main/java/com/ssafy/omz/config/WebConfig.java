package com.ssafy.omz.config;

import com.ssafy.omz.interceptor.JwtInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final JwtInterceptor jwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .excludePathPatterns("/member/login") // /member/login 경로는 kakao access token이 오기 때문에 제외
                .excludePathPatterns("/member/refresh"); // /member/refresh 경로는 access token 재발급 용도
    }
}
