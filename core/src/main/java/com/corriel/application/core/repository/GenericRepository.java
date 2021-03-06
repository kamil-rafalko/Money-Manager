package com.corriel.application.core.repository;

import java.io.Serializable;
import java.util.List;

public interface GenericRepository<T, PK extends Serializable> {

    void create(T entity);
    T find(PK id);
    void remove(T entity);
    List<T> getAll();

}
