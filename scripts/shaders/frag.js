const frag = `

#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 spectrum;
uniform float seed;

varying vec2 v_texcoord;

${includes}


void main(void) {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 centeredUV = uv - 0.5;
    centeredUV.x *= u_resolution.x / u_resolution.y; // Correct for aspect ratio

    //Find distance between mouse and points
    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(uv, mouse);
    float strength = smoothstep(0.5, 0.0, dist);

    // Generate a swirling pattern using FBM and sine waves
    float speed = 0.5; // Higher value = faster animation
    float angle = atan(centeredUV.y, centeredUV.x) ;
    float radius = length(centeredUV) ;
    float sineWave = sin(u_time * 0.5 + radius * 15.0);
    float fbmValue = fbm(centeredUV * 5.0 + u_time * speed) * mix(0.5, 0.1, strength);
    float pattern = fbmValue * 0.5 + sineWave * 0.5 ;

    // Define color gradients
    vec3 color1 = vec3(1.0, 0.0, 0.0); // Red
    vec3 color2 = vec3(0.0, 0.0, 1.0); // Blue

    // Convert HSV to RGB for smooth color transitions
    float hue = u_time * 0.05 + seed;
    vec3 hsv2 = vec3(0.0, 0.0, 0.07); // Slightly shifted hue
    vec3 rgb2 = hsv2rgb(hsv2);

    vec4 color1Vec = vec4(0.98, 0.96, 0.89, 1.0);
    vec4 color2Vec = vec4(rgb2, 1.0);

    // Generate final color based on pattern
    float gap = mix(0.75, 0.01, strength);
    float mixer = smoothstep(0.0, gap, pattern) - smoothstep(1.0 - gap, 1.0, pattern);
    vec4 color = mix(color1Vec, color2Vec, mixer);

    // Output the final color
    gl_FragColor = color;
}
`;