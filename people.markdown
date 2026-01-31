---
layout: page
title: People
permalink: /people/
---

## Principal Investigator
<div class="pi-profile">
    <div class="pi-image">
        <img src="../assets/img/Cauligi.jpg" alt="Abhishek Cauligi">
    </div>
    <div class="pi-info">
        <h3>Abhishek Cauligi</h3>
        <ul>
            <li>Assistant Professor </li>
            <li><a href="https://me.jhu.edu">Department of Mechanical Engineering</a></li>
            <li>Johns Hopkins University</li>
            <li>Email: [last name]@jhu.edu </li>
            <li>Office: Hackerman 117 </li>
            <li><a href="https://acauligi.github.io">Personal webpage</a></li>
        </ul>
    </div>
</div>

## Students

<style>
.student-container {
  display: inline-block;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.student-container:hover {
  transform: scale(1.05);
}

.student-bio {
  display: none;
  margin-top: 15px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: left;
  max-width: 300px;
}

.student-bio.active {
  display: block;
}
</style>

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">

<div class="student-container" onclick="toggleBio('bio-chien')">
  <img src="../assets/img/bchien.png" alt="Brian Chien" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Brian Chien</strong>
  <div id="bio-chien" class="student-bio">
    <h4>Master's Student</h4>
    <p>Brian Chien is a master's student in Robotics. He is interested in learning-based path planning and control for field robots so that they can adapt safely and robustly in uncertain environments.</p>
  </div>
</div>

<div class="student-container" onclick="toggleBio('bio-kodey')">
  <img src="../assets/img/skodey.jpeg" alt="Sriram Kodey" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Sriram Kodey</strong>
  <div id="bio-kodey" class="student-bio">
    <h4>PhD Student</h4>
    <p>Sriram is a first-year PhD student with an MS in Mechanical Engineering from the University of Washington, Seattle, and a BE from BITS Pilani. His research interests lie at the intersection of AI and control theory for autonomous systems.</p>
  </div>
</div>

<div class="student-container" onclick="toggleBio('bio-lihn')">
  <img src="../assets/img/slihn.jpg" alt="Samuel Lihn" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Samuel Lihn</strong>
  <div id="bio-lihn" class="student-bio">
    <h4>Undergraduate Student</h4>
    <p>Samuel is a Mechanical Engineering undergraduate and Robotics BS/MSE student in the Class of 2027. His interests include GPU-accelerated motion planning and control as well as full-stack software and hardware integration.</p>
  </div>
</div>

<div class="student-container" onclick="toggleBio('bio-schwartz')">
  <img src="../assets/img/pschwartz.jpeg" alt="Patrick Schwartz" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Patrick Schwartz</strong>
  <div id="bio-schwartz" class="student-bio">
    <h4>PhD Student</h4>
    <p>Patrick is a first year graduate student who completed his BS in Mechanical Engineering at Notre Dame University. Patrick is interested in developing adapting data-driven control techniques for spacecraft systems.</p>
  </div>
</div>

<div class="student-container" onclick="toggleBio('bio-shi')">
  <img src="../assets/img/cshi.jpg" alt="Casey Shi" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Casey Shi</strong>
  <div id="bio-shi" class="student-bio">
    <h4>Undergraduate Student</h4>
    <p>Casey a Mechanical Engineering undergraduate ('26) at Johns Hopkins University and is enrolled in the combined BS/MSE program in Robotics. Her interests include robotic system design and is currently developing a custom quadrotor drone. </p> 
  </div>
</div>

<div class="student-container" onclick="toggleBio('bio-ventrudo')">
  <img src="../assets/img/eventrudo.jpg" alt="Erin Ventrudo" style="width: 187.5px; height: 187.5px; object-fit: cover; border-radius: 8px;">
  <br><strong>Erin Ventrudo</strong>
  <div id="bio-ventrudo" class="student-bio">
    <h4>Undergraduate Student</h4>
    <p>Erin ('27) is a Mechanical Engineering undergraduate interested in pursuing aerospace and robotics in extreme environments.</p>
  </div>
</div>

</div>

<script>
function toggleBio(bioId) {
  // Close all other bios first
  var allBios = document.querySelectorAll('.student-bio');
  allBios.forEach(function(bio) {
    if (bio.id !== bioId) {
      bio.classList.remove('active');
    }
  });

  // Toggle the clicked bio
  var bio = document.getElementById(bioId);
  bio.classList.toggle('active');
}
</script>
