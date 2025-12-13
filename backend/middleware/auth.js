import jwt from 'jsonwebtoken';

// Middleware to verify JWT token and extract user ID
const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({success:false,message:'Not Authorized Login Again'});
    }
    try {
        // Verify token and extract user ID
        const token_decode =  jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id; // Attach userId to request
        next();
    } catch (error) {
        return res.json({success:false,message:error.message});
    }
}

export default authMiddleware;