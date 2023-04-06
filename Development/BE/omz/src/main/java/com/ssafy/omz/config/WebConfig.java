package com.ssafy.omz.config;

import com.ssafy.omz.interceptor.JwtInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
//@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    private final JwtInterceptor jwtInterceptor;


    @Override
    public void addInterceptors(InterceptorRegistry registry) {

//        registry.addInterceptor(jwtInterceptor)
//                .excludePathPatterns("/api/member/login") // /member/login 경로는 kakao access token이 오기 때문에 제외
//                .excludePathPatterns("/api/member/refresh") // /member/refresh 경로는 access token 재발급 용도
//                .excludePathPatterns("/v2/api-docs") // swagger 관련
//                .excludePathPatterns("/swagger-resources/**") // swagger 관련
//                .excludePathPatterns("/swagger-ui.html") // swagger 관련
//                .excludePathPatterns("/webjars/**"); // /swagger 관련

    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedHeaders("*")
                .allowedOrigins("http://localhost:5173","http://localhost:8080","http://localhost:3000"
                                ,"https://j8a705.p.ssafy.io","https://j8a705.p.ssafy.io:80","https://j8a705.p.ssafy.io:8080","https://j8a705.p.ssafy.io:5173","https://j8a705.p.ssafy.io:3000")
                .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE","PATCH");
    }

}
