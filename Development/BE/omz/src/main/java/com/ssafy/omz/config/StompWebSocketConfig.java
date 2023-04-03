package com.ssafy.omz.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@EnableWebSocketMessageBroker
@RequiredArgsConstructor
@Configuration
public class StompWebSocketConfig implements WebSocketMessageBrokerConfigurer {

//    WebSocket 앞에서 token 체크하도록
    private final StompHandler stompHandler;

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(stompHandler);
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        WebSocketMessageBrokerConfigurer.super.registerStompEndpoints(registry);
        registry.addEndpoint("/stomp-chat")
//                .setAllowedOrigins("*")
// When allowCredentials is true, allowedOrigins cannot contain the special value "*" since that cannot be set on the "Access-Control-Allow-Origin" response header.
                .setAllowedOriginPatterns("*")
//                .setAllowedOrigins("http://localhost:8080","http://localhost:3000")
//                .setAllowedOrigins("http://j8a705.p.ssafy.io")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
//        WebSocketMessageBrokerConfigurer.super.configureMessageBroker(registry);
        registry.setApplicationDestinationPrefixes("/pub");
        registry.enableSimpleBroker("/sub");
    }
}
