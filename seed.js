const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bmpwyrnwpbwblbnqfeqx.supabase.co';
const supabaseKey = 'sb_publishable_nUN6kWv6p3ee1bsAP9WTRA_8NpoplYz';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const { data, error } = await supabase.from('blogs').insert([
    {
      title: "The Future of Precast Concrete in Modern Infrastructure",
      content: "Precast concrete is revolutionizing the way we build. With its unparalleled speed, durability, and cost-effectiveness, it has become the material of choice for large-scale infrastructure projects worldwide.\n\nFrom massive bridge girders to modular stormwater management systems, precast elements are cast in controlled environments ensuring maximum quality control. This allows for faster installation on-site, minimizing traffic disruption and labor costs. Looking ahead, innovations in high-performance concrete mixtures and smart formwork will only accelerate this trend, making precast more sustainable and adaptable than ever before.",
      image_url: "/kfmolds/Girder-21.jpg"
    },
    {
      title: "How Advanced Form Systems Save Time and Money",
      content: "In heavy civil engineering, time is literally money. Delays in formwork setup can stall an entire project. That's why investing in precision-engineered, reusable steel forms is critical.\n\nCustom infrastructure forms, such as those used for tunnel linings or massive retaining walls, are designed to exact tolerances. This ensures that every cast is perfect, eliminating the need for costly on-site modifications. Furthermore, features like hydraulic stripping and self-aligning joints drastically reduce turnaround times between pours. In this article, we explore the ROI of upgrading your mold systems and how to select the right forms for your next mega-project.",
      image_url: "/kfmolds/Box-Culvert-1.jpg"
    }
  ]);

  if (error) {
    console.error("Error seeding data:", error.message, error.details);
  } else {
    console.log("Successfully seeded 2 blogs into the database!");
  }
}
seed();
