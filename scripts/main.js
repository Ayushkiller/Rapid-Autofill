Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.graphitePress) return;
      b.items.set(Items.coal, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.multiPress) return;
      b.items.set(Items.coal, 10);
      if(b.block != Blocks.multiPress) return;
      b.liquids.set(Liquids.water, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.siliconSmelter) return;
      b.items.set(Items.coal, 10);  
      b.items.set(Items.sand, 20);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.siliconCrucible) return;
      b.items.set(Items.coal, 10);  
      b.items.set(Items.sand, 20);
      b.items.set(Items.pyratite, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.kiln) return;
      b.items.set(Items.lead, 10);  
      b.items.set(Items.sand, 20);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.plastaniumCompressor) return;
      b.items.set(Items.titanium, 10);  
      b.liquids.set(Liquids.oil, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.phaseWeaver) return;
      b.items.set(Items.thorium, 10);  
      b.items.set(Items.sand, 20);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.surgeSmelter) return;
      b.items.set(Items.copper, 10);  
      b.items.set(Items.silicon, 10);
      b.items.set(Items.lead, 15);
      b.items.set(Items.titanium, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.cryofluidMixer) return;
      b.items.set(Items.titanium, 10);  
      b.liquids.set(Liquids.water, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.pyratiteMixer) return;
      b.items.set(Items.sand, 10);  
      b.items.set(Items.coal, 10);
      b.items.set(Items.lead, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.blastMixer) return;
      b.items.set(Items.pyratite, 10);  
      b.items.set(Items.sporePod, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.melter) return;
      b.items.set(Items.scrap, 10); 
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.separator) return;
      b.liquids.set(Liquids.slag, 10);
    })
  }); 
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.disassembler) return;
      b.items.set(Items.scrap, 10);  
      b.liquids.set(Liquids.slag, 10);
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.sporePress) return;
      b.items.set(Items.sporePod, 10);  
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.pulverizer) return;
      b.items.set(Items.scrap, 10);  
    })
  });
  Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.coalCentrifuge) return; 
      b.liquids.set(Liquids.oil, 10);
    })
  });
//erkier
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.siliconArcFurnace) return;
    b.items.set(Items.graphite, 10);  
    b.items.set(Items.sand, 20);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.electrolyzer) return;
    b.liquids.set(Liquids.water, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.oxidationChamber) return;
    b.items.set(Items.beryllium, 10);  
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.slagHeater) return;
    b.liquids.set(Liquids.slag, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.phaseHeater) return;
    b.items.set(Items.phaseFabric, 10)
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.carbideCrucible) return;
    b.items.set(Items.tungsten, 10)
    b.items.set(Items.graphite, 10)
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.slagCentrifuge) return;
    b.liquids.set(Liquids.slag, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.surgeCrucible) return;
    b.items.set(Items.silicon, 10)
    b.liquids.set(Liquids.slag, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.cyanogenSynthesizer) return;
    b.items.set(Items.graphite, 10)
    b.liquids.set(Liquids.arkycite, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.phaseSynthesizer) return;
    b.items.set(Items.thorium, 10)
    b.items.set(Items.sand, 10)
    b.liquids.set(Liquids.ozone, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.mendProjector) return;
    b.items.set(Items.phaseFabric, 10);
  })
});

Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.overdriveDome) return;
    b.items.set(Items.phaseFabric, 10);
    b.items.set(Items.silicon, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.forceProjector) return;
    b.items.set(Items.phaseFabric, 10);
    b.liquids.set(Liquids.cryofluid, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block !=  Blocks.buildTower) return;
    b.liquids.set(Liquids.nitrogen, 10);
  })
});

Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.regenProjector) return;
    b.liquids.set(Liquids.hydrogen, 10);
    b.items.set(Items.phaseFabric, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.shockwaveTower) return;
    b.liquids.set(Liquids.cyanogen, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.reinforcedPump) return;
    b.liquids.set(Liquids.hydrogen, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.combustionGenerator) return;
    b.items.set(Items.blastCompound, 10);
    b.items.set(Items.coal, 10);
    b.items.set(Items.sporePod, 10);
    b.items.set(Items.pyratite, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.steamGenerator) return;
    b.items.set(Items.sporePod, 10);
    b.items.set(Items.coal, 10);
    b.items.set(Items.blastCompound, 10);
    b.items.set(Items.pyratite, 10);
    b.liquids.set(Liquids.water, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.differentialGenerator) return;
    b.items.set(Items.pyratite, 10);
    b.liquids.set(Liquids.cryofluid, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.rtgGenerator) return;
    b.items.set(Items.phaseFabric, 10);
    b.items.set(Items.thorium, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.thoriumReactor) return;
    b.items.set(Items.thorium, 10);
    b.liquids.set(Liquids.cryofluid, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.impactReactor) return;
    b.items.set(Items.blastCompound, 10);
    b.liquids.set(Liquids.cryofluid, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.chemicalCombustionChamber) return;
    b.liquids.set(Liquids.ozone, 10);
    b.liquids.set(Liquids.arkycite, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.pyrolysisGenerator) return;
    b.liquids.set(Liquids.slag, 10);
    b.liquids.set(Liquids.arkycite, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.fluxReactor) return;
    b.liquids.set(Liquids.cyanogen 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != Blocks.neoplasiaReactor) return;
    b.liquids.set(Liquids.arkycite, 10);
    b.liquids.set(Liquids.water, 10);
    b.items.set(Items.phaseFabric, 10);
  })
});



