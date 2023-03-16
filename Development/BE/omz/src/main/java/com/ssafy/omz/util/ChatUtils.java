package com.ssafy.omz.util;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Component
@RequiredArgsConstructor
public class ChatUtils {
    //Destination 으로부터 roomId 값 조회
    public String getRoodIdFromDestination(String destination){
        int lastIndex = destination.lastIndexOf('/');
        if(lastIndex != -1)
            return destination.substring(lastIndex+1);
        else
            return "";
    }

    //채팅 데이터 생성일자 Double 형으로 형변환
    public Double changeLocalDateTimeToDouble(LocalDateTime createdAt) {
//        public Double changeLocalDateTimeToDouble(String createdAt) {
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS");
//        LocalDateTime localDateTime = LocalDateTime.parse(createdAt, formatter);

        createdAt.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss.SSS"));
        return ((Long) createdAt.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()).doubleValue();
    }
}
