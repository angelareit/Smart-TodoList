DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    cat_id INT NOT NULL REFERENCES categories(category_id),
    priority INT DEFAULT 0 CHECK (priority BETWEEN 0 AND 5),
    title NOT NULL VARCHAR(255),
    task_due TIMESTAMP,
    is_completed BOOLEAN DEFAULT FALSE,
    created_date TIMESTAMP,
    completed_date TIMESTAMP
);