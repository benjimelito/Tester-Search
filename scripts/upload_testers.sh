#!/bin/bash
psql -d testersearch_node -c "\copy testers FROM './data/testers.csv' DELIMITER ',' CSV HEADER"