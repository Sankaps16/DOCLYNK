27/08/2025 update:
Admin / Doctor Backend Feature

Controller (addDoctor)
Handles form data from req.body.
Handles file upload via req.file.
Added try/catch for errors.

Middleware (multer)
Configured diskStorage to save files with original names.
Exported upload middleware for routes.
Routes (adminRouter)
POST /add-doctor route with:
upload.single('image') → parses file before controller.
addDoctor → handles data + file.
Exported router for server.js.

Server
Mounted router: app.use('/api/admin', adminRouter).
Enabled JSON and URL-encoded parsing.

Concepts Covered
Controllers = handle logic.
Middleware = process request before controller.
Multer = file upload parsing.
Routing = Router.post() + URL prefix.

