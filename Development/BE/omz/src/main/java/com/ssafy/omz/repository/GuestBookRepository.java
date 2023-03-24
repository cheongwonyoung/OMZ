package com.ssafy.omz.repository;

import com.ssafy.omz.entity.GuestBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GuestBookRepository extends JpaRepository<GuestBook,Long> {


}
