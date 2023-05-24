    const apiUrl = 'https://randomuser.me/api/?gender=female&nat=fr';

    function fetchRandomProfile() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const profile = data.results[0];
          displayProfile(profile);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    function displayProfile(profile) {
      const profileCardElement = document.getElementById('profile-card');
      profileCardElement.innerHTML = `
        <div class="card">
          <img src="${profile.picture.large}" alt="Profil Image">
          <h2>${profile.login.username}</h2>
          <p><strong>Âge:</strong> ${profile.dob.age}</p>
          <p><strong>Ville:</strong> ${profile.location.city}</p>
          <p><strong>Departement:</strong> ${profile.location.state}</p>
        </div>
      `;
    }

    fetchRandomProfile();