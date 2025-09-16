16/09/2025 update:
Implemented Admin Authentication system.

Created a middleware authAdmin to restrict access.

Used JWT tokens for secure authentication.

Configured .env with ADMIN_EMAIL, ADMIN_PASSWORD, and JWT_SECRET.

Tested an API endpoint → only authorized admin can add a new doctor.

Verified that unauthorized requests are blocked.