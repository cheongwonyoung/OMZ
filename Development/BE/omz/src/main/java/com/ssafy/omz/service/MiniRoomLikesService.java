package com.ssafy.omz.service;

public interface MiniRoomLikesService {

    long getLikes(long miniRoomId);
    void likeMiniRoom(long miniRoomId, long memberId);

}
