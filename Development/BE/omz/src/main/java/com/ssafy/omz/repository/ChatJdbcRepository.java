package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Chat;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class ChatJdbcRepository {
    private final JdbcTemplate jdbcTemplate;

    //  MySql에 Redis Cache의 채팅 내역 저장
    public void batchInsertChats(List<Chat> chatList){


        String sql = "INSERT INTO chat"
                +  "(chat_room_id, message, from_member_id, created_time) VALUE(?,?,?,?)";
//        +  "(chat_room_id, message, from_member_id, created_time, is_checked) VALUE(?,?,?,?)";


        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {

            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                Chat chat = chatList.get(i);
                ps.setLong(1, chat.getChatRoom().getChatRoomId());
                ps.setString(2, chat.getMessage());
                ps.setLong(3, chat.getFromMember().getMemberId());
                ps.setString(4, chat.getCreatedTime());
            }

            @Override
            public int getBatchSize() {
                return chatList.size();
            }
        });
    }
}
