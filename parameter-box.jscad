
let main = () => {

"use strict"; 

 const w = 3;
 const l = 2;
 const h = 1;

 const ow = 0.25;
 const ol = 0.25;
 const t = 0.125;
 const ts = 0.5;

 const hs = cube({size: [l + t + ol, w + 2*ow,     t], center: true});
 const ws = cube({size: [l - t,      t,        h - t], center: true});
 const ls = cube({size: [t,          w + ow,   h - t], center: true});
 
 const t_s=1, b_s=-1, r_s_=1, l_s=-1, n_s=-1, f_s=1;

 const wt = () => { };
 const lt = () => { };
 const ht = union(
             cube({size: [ts,  t, t], center: true}).translate([   0,  w/2 - t/2, 0]),
             cube({size: [ts,  t, t], center: true}).translate([   0, -w/2 + t/2, 0]),
             cube({size: [ t, ts, t], center: true}).translate([ l/2,          0, 0]),
             cube({size: [ t, ts, t], center: true}).translate([-l/2,          0, 0]));


 return union(
  color("red",
   difference(hs, ht).translate([0,0,h/2])),
  color("red",
   difference(hs, ht).translate([0,0,-h/2])),
  color("blue",
   union(
    ws.translate([0,w/2-t/2,0]),
    cube({size: [t,t,ts], center: true}).translate([l/2,-w/2+t/2,0]),
    cube({size: [t,t,ts], center: true}).translate([-l/2,-w/2+t/2,0]),
    cube({size: [ts,t,t], center: true}).translate([0,-w/2+t/2,h/2]),
    cube({size: [ts,t,t], center: true}).translate([0,-w/2+t/2,-h/2]))),
  color("blue",
   union(
    ws.translate([0,-w/2+t/2,0]),
    cube({size: [t,t,ts], center: true}).translate([l/2,w/2-t/2,0]),
    cube({size: [t,t,ts], center: true}).translate([-l/2,w/2-t/2,0]),
    cube({size: [ts,t,t], center: true}).translate([0,w/2-t/2,h/2]),
    cube({size: [ts,t,t], center: true}).translate([0,w/2-t/2,-h/2]))),
  color("green",
   union(
    difference(
     ls.translate([l/2,0,0]),
     union(
      cube({size: [t,t,ts], center: true}).translate([l/2,-w/2+t/2,0]),
      cube({size: [t,t,ts], center: true}).translate([l/2,w/2-t/2,0]))),
    cube({size: [t,ts,t], center: true}).translate([l/2,0,h/2]),
    cube({size: [t,ts,t], center: true}).translate([l/2,0,-h/2]))),
  color("green",
   union(
    difference(
     ls.translate([-l/2,0,0]),
     union(
      cube({size: [t,t,ts], center: true}).translate([-l/2,-w/2+t/2,0]),
      cube({size: [t,t,ts], center: true}).translate([-l/2,w/2-t/2,0]))),
    cube({size: [t,ts,t], center: true}).translate([-l/2,0,h/2]),
    cube({size: [t,ts,t], center: true}).translate([-l/2,0,-h/2])))).translate([0,0,1.5]).scale(10);};
