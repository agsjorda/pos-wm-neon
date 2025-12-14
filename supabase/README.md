# Supabase Backend Setup

This folder contains the Supabase configuration for your POS system.

## Quick Start

### Option 1: Use Existing Supabase Project (Recommended)

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Get your credentials from Dashboard → Settings → API
3. Add to your `.env` file:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

4. Test the connection in your app!

### Option 2: Local Development

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Start local Supabase:
```bash
supabase start
```

3. Get local credentials from terminal output
4. Access Supabase Studio: http://localhost:54323

## Testing Connection

Create a simple test component:

```tsx
import { supabase } from '@/lib/services/supabase';

// Test connection
const { data, error } = await supabase.from('test').select('*');
console.log('Connected:', !error);
```

## Next Steps

Once connected:
1. Create your database tables via Supabase Studio
2. Set up authentication
3. Add Row Level Security policies
4. Build your sync logic
