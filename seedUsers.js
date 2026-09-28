const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bmpwyrnwpbwblbnqfeqx.supabase.co';
const supabaseKey = 'sb_publishable_nUN6kWv6p3ee1bsAP9WTRA_8NpoplYz';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const { data, error } = await supabase.from('users').insert([
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Sarah Smith", email: "sarah@example.com", role: "Editor" },
    { name: "Michael Chen", email: "michael@example.com", role: "Viewer" }
  ]);

  if (error) {
    console.error("Error seeding users:", error.message, error.details);
  } else {
    console.log("Successfully seeded 3 users into the database!");
  }
}
seed();
