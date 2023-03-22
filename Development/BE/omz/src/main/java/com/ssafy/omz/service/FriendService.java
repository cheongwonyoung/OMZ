package com.ssafy.omz.service;

import com.ssafy.omz.dto.req.FriendRequestDto;
import org.springframework.stereotype.Service;

import javax.transaction.RollbackException;

@Service
public interface FriendService {
    void requestFriend(FriendRequestDto.Write friend) throws RollbackException;
}
