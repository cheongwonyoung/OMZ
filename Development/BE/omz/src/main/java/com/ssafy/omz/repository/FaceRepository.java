package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Face;
import com.ssafy.omz.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FaceRepository extends JpaRepository<Face, Long> {
    Face findByFaceId(Long faceId);
}
