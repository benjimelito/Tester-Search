#!/bin/bash
psql -d testersearch_node -c "\copy devices FROM './data/devices.csv' DELIMITER ',' CSV HEADER"