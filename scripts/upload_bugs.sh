#!/bin/bash
psql -d testersearch_node -c "\copy bugs FROM './data/bugs.csv' DELIMITER ',' CSV HEADER"