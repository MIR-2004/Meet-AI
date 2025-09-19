# MEET-AI - AI-Powered Meeting Platform

## Overview
Meet-AI is a cutting-edge **AI-powered meeting platform** that revolutionizes how teams collaborate and communicate. Built with modern web technologies, it provides intelligent meeting assistance, real-time video calls, and AI-powered insights to enhance productivity and collaboration.

> Experience the future of meetings - [Try Meet-AI](https://meet-ai-five-ashen.vercel.app/)

## Features
- **AI-Powered Meetings**: Advanced AI assistant that provides real-time insights and intelligent support during meetings
- **Video Conferencing**: Seamless video calls with crystal-clear quality powered by Stream Video
- **Smart Chat Integration**: Real-time chat with AI assistance and instant answers
- **Agent Management**: Create and manage custom AI agents for different meeting contexts
- **Meeting Analytics**: Comprehensive meeting summaries, transcripts, and insights
- **Secure Authentication**: Multi-provider authentication with GitHub, Google, and email/password
- **Subscription Management**: Integrated billing and subscription management with Polar
- **Responsive Design**: Beautiful, modern UI that works across all devices

## Tech Stack
### Frontend
- **Next.js 15**: React framework with App Router for modern web development
- **TypeScript**: Type-safe development with enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **React Hook Form**: Efficient form handling with validation

### Backend & Database
- **tRPC**: End-to-end typesafe APIs with excellent TypeScript integration
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL
- **Better Auth**: Modern authentication library with multiple providers
- **Inngest**: Reliable background job processing
- **Stream**: Real-time video and chat infrastructure

### AI & Integrations
- **OpenAI**: AI-powered meeting assistance and insights
- **Stream Video**: Professional video calling infrastructure
- **Stream Chat**: Real-time messaging and collaboration
- **Polar**: Subscription and billing management

### Development Tools
- **ESLint**: Code linting and quality assurance
- **Drizzle Kit**: Database migrations and management
- **ngrok**: Local development with webhook support

## System Architecture
The application follows a **modern full-stack architecture**:
1. **Frontend**: Next.js application with TypeScript, providing a responsive and interactive user interface
2. **API Layer**: tRPC for type-safe API communication between frontend and backend
3. **Authentication**: Better Auth with multiple OAuth providers and secure session management
4. **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
5. **Real-time Services**: Stream for video calls and chat functionality
6. **AI Services**: OpenAI integration for intelligent meeting assistance
7. **Background Jobs**: Inngest for reliable async processing

## Installation and Setup
### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Stream account (for video/chat services)
- OpenAI API key
- Polar account (for subscription management)

### Steps to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Meet-AI.git
   cd Meet-AI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env.local` file:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/meetai"
   
   # Authentication
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # OAuth Providers
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   
   # Stream (Video & Chat)
   NEXT_PUBLIC_STREAM_API_KEY="your-stream-api-key"
   STREAM_VIDEO_SECRET_KEY="your-stream-video-secret"
   STREAM_CHAT_SECRET_KEY="your-stream-chat-secret"
   
   # AI Services
   OPENAI_API_KEY="your-openai-api-key"
   
   # Polar (Billing)
   POLAR_ACCESS_TOKEN="your-polar-access-token"
   POLAR_WEBHOOK_SECRET="your-polar-webhook-secret"
   
   # Inngest (Background Jobs)
   INNGEST_EVENT_KEY="your-inngest-event-key"
   INNGEST_SIGNING_KEY="your-inngest-signing-key"
   ```

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application:
   - Open your browser and navigate to `http://localhost:3000`
   - For webhook testing in development, run: `npm run dev:webhook`

## Usage
1. **Authentication**: Sign up or log in using GitHub, Google, or email/password
2. **Create AI Agents**: Set up custom AI assistants with specific instructions for different meeting contexts
3. **Schedule Meetings**: Create meetings and assign AI agents to provide intelligent assistance
4. **Join Video Calls**: Participate in high-quality video meetings with AI-powered features
5. **AI Chat Support**: Get real-time AI assistance and insights during meetings
6. **Meeting Analytics**: Review meeting summaries, transcripts, and AI-generated insights
7. **Subscription Management**: Manage your subscription and billing through the integrated Polar system

## Key Features in Detail

### AI Agent Management
- Create custom AI agents with specific instructions and personalities
- Assign agents to meetings for contextual assistance
- Manage and update agent configurations

### Video Conferencing
- High-quality video calls powered by Stream Video
- Real-time chat integration with AI assistance
- Meeting recording and transcription capabilities

### Meeting Analytics
- Automatic meeting summaries and insights
- Transcript generation and analysis
- AI-powered action item extraction

### Subscription & Billing
- Flexible pricing plans (Free, Monthly, Yearly, Enterprise)
- Integrated billing management with Polar
- Webhook support for subscription events

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run dev:webhook` - Start development server with ngrok for webhook testing

### Database Management
The project uses Drizzle ORM with PostgreSQL. Use the following commands:
- `npm run db:push` - Apply schema changes to the database
- `npm run db:studio` - Open Drizzle Studio for visual database management

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact
- **Email**: mir.saif.ali2004@gmail.com
- **Project**: [Meet-AI Repository](https://github.com/MIR-2004/Meet-AI)