#!/bin/bash
psql -d testersearch_node -c "\copy tester_devices FROM './data/tester_device.csv' DELIMITER ',' CSV HEADER"