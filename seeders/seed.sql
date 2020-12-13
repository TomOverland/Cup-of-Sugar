DROP DATABASE cupofsugar_db;
CREATE DATABASE cupofsugar_db;

SELECT *
FROM cupofsugar_db.users;
SELECT *
FROM cupofsugar_db.items;

USE cupofsugar_db;

INSERT INTO users
    (auth0_id, userName, userEmail)
VALUES
    ("123", "Bob Bobson", "bob@email.com");

INSERT INTO items
    (itemName, itemDescription, image, category, rentalFee, maxRentalDuration, email, phone, preferredContact, availableStatus)
VALUES
    ("Test Item 1", "much description", "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555340536/shape/mentalfloss/whaleshark.png", "miscellaneous", 5, "1 year", "test@email.com", "4444444444", "call or text", true);