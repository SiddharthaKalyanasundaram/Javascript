'use strict'
const USER_1_Name = "Sidhu"; // General Practice - For Hardcoding values we use Caps and underscore.
let currentUser = USER_1_Name; // using let keyword to assign a value. Genrally use Camel case here.
const firstUser = currentUser; // General Practice - Constants for non-hardcoding values we generally use camelcase.
let incomingUser = USER_1_Name, outgoingUser = currentUser; // Allowed to multiple variable assignment in single line.  But not preferable.
let currentUser = "Durga"; // This will throw error since this variable has already taken.