use warehouse_db;

-- Find the item that has minimum weight
SELECT * FROM items WHERE weight = (SELECT MIN(weight) FROM items);

-- Find the different warehouses in “Pune”.
SELECT * FROM warehouses WHERE location = "Pune";

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM orders INNER JOIN customer ON orders.customer_id = customer.cno WHERE cname = "Mr. Patil";

-- Find a Warehouse which has maximum stores.
SELECT * FROM stores WHERE warehouse_id = (SELECT warehouse_id FROM stores GROUP BY warehouse_id ORDER BY count(warehouse_id) desc limit 1);

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM items where itemno = (SELECT item_id FROM orders GROUP BY item_id ORDER BY count(item_id) limit 1);

-- Find the detailed orders given by each customer.
SELECT * FROM orders 
INNER JOIN customer ON orders.customer_id = customer.cno 
INNER JOIN items ON orders.item_id = items.itemno; 