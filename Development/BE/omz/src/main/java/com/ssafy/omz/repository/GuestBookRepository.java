package com.ssafy.omz.repository;

import com.ssafy.omz.entity.GuestBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuestBookRepository extends JpaRepository<GuestBook,Long> {
}
