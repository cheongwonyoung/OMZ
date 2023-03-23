package com.ssafy.omz.service;


import com.google.cloud.storage.*;
import com.ssafy.omz.entity.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Service("GCSService")
@RequiredArgsConstructor
public class GCSServiceImpl implements GCSService{
    private final Storage storage;
    @Override
    public String uploadBoardImage(MultipartFile file, Board board) throws IOException {
        String bucketName = "omz-bucket";
        String saveFileName = UUID.randomUUID() + StringUtils.cleanPath(file.getOriginalFilename());
        try(InputStream inputStream = file.getInputStream()) {
            Image processedImage = ImageIO.read(inputStream);

            BufferedImage scaledBI = new BufferedImage(200, 200, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = scaledBI.createGraphics();
            g.drawImage(processedImage, 0, 0, 200, 200, null);
            g.dispose();

            ByteArrayOutputStream os = new ByteArrayOutputStream();
            ImageIO.write(scaledBI, "jpg", os);

            InputStream processedInputStream = new ByteArrayInputStream(os.toByteArray());

            storage.create(BlobInfo.newBuilder(bucketName, saveFileName).build(), processedInputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        board.updateFile(saveFileName);
        String result = "/" + saveFileName;
        return result;
    }
}
