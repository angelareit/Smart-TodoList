DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    cat_id INT NOT NULL REFERENCES categories(category_id),
    priority INT DEFAULT 0 CHECK (priority BETWEEN 0 AND 5),
    title VARCHAR(255),
    time_due TIMESTAMP,
    is_completed BOOLEAN DEFAULT FALSE,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);