import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
	myStyle: object = {};
	myParams: object = {};
	widht: number = 100;
	height: number = 100;
  constructor() { }

  ngOnInit() {
  	this.myStyle = {
  		'position': 'fixed',
  		'width': '100%',
  		'height': '100%',
  		'z-index': -1,
  		'top': 0,
  		'left': 0,
  		'right': 0,
  		'bottom': 0,
  		'background-color': '#3C4EAE',
  	};

	this.myParams = {
            particles: {
			    "number": {
			      "value": 10,
			      "density": {
			        "enable": true,
			        "value_area": 100
			      }
		    },
	            color: {
	                value: '#FFFFFF'
	            },
				"shape": {
					  "type": "circle",
					  "stroke": {
					    "width": 0,
					    "color": "#000000"
					  },
					  "polygon": {
					    "nb_sides": 5
					  },
					  "image": {
					    "src": "img/github.svg",
					    "width": 100,
					    "height": 100
					  }
				},
			    "opacity": {
					"value": 0.3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": .5,
						"opacity_min": 0.01,
						"sync": false
					}
			    },
				"size": {
					  "value": 10,
					  "random": true,
					  "anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					  }
				},
			    "line_linked": {
			      "enable": false,
			      "distance": 150,
			      "color": "#ffffff",
			      "opacity": 0.4,
			      "width": 1
			    },
				"move": {
					"enable": true,
					"speed": 4,
					"direction": "top",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
	    	}, //end particles{}
			interactivity: {
				detect_on: "canvas",
				events: {
				  onhover: {
				    enable: true,
				    mode: "repulse"
				  },
				  onclick: {
				    enable: true,
				    mode: "push"
				  },
				  resize: true
				},
				modes: {
				  grab: {
				    distance: 140,
				    line_linked: {
				      opacity: 1
				    }
				  },
				  bubble: {
				    distance: 134,
				    size: 14,
				    duration: 100,
				    opacity: .4,
				    speed: 100
				  },
				  repulse: {
				    distance: 55,
				    duration: 0.3
				  },
				  push: {
				    particles_nb: 10
				  },
				  remove: {
				    particles_nb: 2
				  }
				}
			}, //end interactivity{}
			"retina_detect": true
	};
  } //end ngOnInit()

} //end export class
