package com.ssafy.omz.repository;

import com.ssafy.omz.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikesRepository extends JpaRepository<Likes,Long> {
}
