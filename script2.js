
    document.addEventListener('DOMContentLoaded', () => {
      // Image switching (simulated since real SVG paths aren't available)
      const imageSources = [
        'https://placehold.co/300x200/2588eb/white?text=Lothric+Banner',
        'https://placehold.co/300x200/ff6b6b/white?text=Bloodstone+Banner',
        'https://placehold.co/300x200/4ecdc4/white?text=YouTube+Banner'
      ];
      
      const mainImage = document.getElementById('mainImage');
      const blocks = [document.querySelector('.blockk1'), document.querySelector('.blockk2'), document.querySelector('.blockk3')];
      
      blocks.forEach((block, index) => {
        if (block) {
          block.addEventListener('click', () => {
            mainImage.src = imageSources[index] || imageSources[0];
          });
        }
      });

      // Navigation button activation
      const navGroups = document.querySelectorAll('.knopka-group, .knopka-group-2, .knopka-group-3');
      
      navGroups.forEach(group => {
        group.addEventListener('click', () => {
          navGroups.forEach(g => g.classList.remove('active'));
          group.classList.add('active');
        });
        
        // Hover effects are handled via CSS
      });
    });