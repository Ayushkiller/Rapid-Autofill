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
    if(b.block !=  overdriveDome) return;
    b.items.set(Items.phaseFabric, 10);
    b.items.set(Items.silicon, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block !=  forceProjector) return;
    b.items.set(Items.phaseFabric, 10);
    b.liquids.set(Liquids.cryofluid, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block !=  buildTower) return;
    b.liquids.set(Liquids.nitrogen, 10);
  })
});

Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != regenProjector) return;
    b.liquids.set(Liquids.hydrogen, 10);
    b.items.set(Items.phaseFabric, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != shockwaveTower) return;
    b.liquids.set(Liquids.cynaogen, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != reinforcedPump) return;
    b.liquids.set(Liquids.hydrogen, 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != combustionGenerator) return;
    b.items.set(new ConsumeItemFlammable(), 10);
  })
});
Events.run(Trigger.update, () => {
  Groups.build.each(b => {
    if(b.block != steamGenerator) return;
    b.items.set(new ConsumeItemFlammable(), 10);
    b.liquids.set(Liquids.water, 10);
  })
});



