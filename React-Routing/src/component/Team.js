import React from 'react';
import Me from "./../img/Me.jpg";
import sushil from "./../img/sushil.jpg";
import jungali from "./../img/jungali.jpg";
import pandu from "./../img/pandu.jpg";

function Team() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Team Members</h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto"></p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-4">
          <div className="space-y-4 text-center">
            <img 
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
              src={Me} 
              alt="Shrijana Maharjan" 
              loading="lazy" 
              width="640" 
              height="667" 
            />
            <div>
              <h4 className="text-2xl">Shrijana Maharjan</h4>
              <h5>201330 BECE</h5>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img 
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
              src={sushil} 
              alt="Sushil Baral" 
              loading="lazy" 
              width="1000" 
              height="667" 
            />
            <div>
              <h4 className="text-2xl">Sushil Baral</h4>
              <h5>201334 BECE</h5>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img 
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-64 lg:w-64 lg:h-80" 
              src={jungali} 
              alt="Saujanya Shrestha" 
              loading="lazy" 
              width="1000" 
              height="667" 
            />
            <div>
              <h4 className="text-2xl">Saujanya Shrestha</h4>
              <h5>201326 BECE</h5>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img 
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-64 lg:w-64 lg:h-80" 
              src={pandu} 
              alt="Sameer Bhatt" 
              loading="lazy" 
              width="1000" 
              height="667" 
            />
            <div>
              <h4 className="text-2xl">Sameer Bhatt</h4>
              <h5>201325 BECE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
