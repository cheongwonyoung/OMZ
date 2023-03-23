package com.ssafy.omz.service;


import com.ssafy.omz.entity.Board;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public interface GCSService {
    public String uploadBoardImage(MultipartFile file, Board board) throws IOException;
}
