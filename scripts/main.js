Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      switch(b.block) {
        // COAL //
        case Blocks.combustionGenerator:
        case Blocks.pyratiteMixer:
        case Blocks.graphitePress:
        case Blocks.multiPress:
        case Blocks.siliconSmelter:
        case Blocks.siliconCrucible:
          b.items.set(Items.coal, 10);
          break;
      }

      switch(b.block) {
        // BLAST //
        case Blocks.impactReactor:
        case Blocks.steamGenerator:
        case Blocks.combustionGenerator:
          b.items.set(Items.blastCompound, 10);
          break;
      }
      switch(b.block) {
        // CRYOFLUID // 
        case Blocks.impactReactor:
        case Blocks.thoriumReactor:
        case Blocks.differentialGenerator:
        case Blocks.forceProjector:
          b.liquids.set(Liquids.cryofluid, 10);
          break;
      }
      switch(b.block) {
        // WATER //
        case Blocks.neoplasiaReactor:
        case Blocks.steamGenerator:
        case Blocks.electrolyzer: // Erekir
        case Blocks.cryofluidMixer:
        case Blocks.multiPress:
          b.liquids.set(Liquids.water, 10);
          break;
      }
      switch(b.block) {
        // SAND //
        case Blocks.phaseSynthesizer: // Erekir
        case Blocks.siliconArcFurnace: // Erekir
        case Blocks.pyratiteMixer:
        case Blocks.graphitePress:
        case Blocks.kiln:
        case Blocks.siliconSmelter:
        case Blocks.siliconCrucible:
        case Blocks.phaseWeaver:
          b.items.set(Items.sand, 20);
          break;
      }
      switch(b.block) {
        // PYRATITE //
        case Blocks.thoriumReactor:
        case Blocks.differentialGenerator:
        case Blocks.steamGenerator:
        case Blocks.combustionGenerator:
        case Blocks.blastMixer:
        case Blocks.siliconCrucible:
          b.items.set(Items.pyratite, 10);
          break;
      }
      switch(b.block) {
        // LEAD //
        case Blocks.pyratiteMixer:
        case Blocks.kiln:
        case Blocks.surgeSmelter:
          b.items.set(Items.lead, 10);
          break;
      }
      switch(b.block) {
        // TITANIUM //
        case Blocks.cryofluidMixer:
        case Blocks.surgeSmelter:
        case Blocks.plastaniumCompressor:
          b.items.set(Items.titanium, 10);  
          break;
      }
      switch(b.block) {
        // OIL //
        case Blocks.coalCentrifuge:
        case Blocks.plastaniumCompressor:
          b.liquids.set(Liquids.oil, 10);
          break;
      }
      switch(b.block) {
        // SILICON //
        case Blocks.overdriveDome: 
        case Blocks.surgeCrucible: // Erekir
        case Blocks.surgeSmelter:
          b.items.set(Items.silicon, 10);
          break;
      }
      switch(b.block) {
        // COPPER //
        case Blocks.surgeSmelter:
          b.items.set(Items.copper, 10);
          break;
      }
      switch(b.block) {
        // SPORE POD //
        case Blocks.steamGenerator:
        case Blocks.combustionGenerator:
        case Blocks.sporePress:
        case Blocks.blastMixer:
          b.items.set(Items.sporePod, 10);
          break
      }
      switch(b.block) {
        // SCRAP //
        case Blocks.pulverizer:
        case Blocks.disassembler:
        case Blocks.melter:
          b.items.set(Items.scrap, 10); 
          break;
      }
      switch(b.block) {
        // SLAG //
        case Blocks.pyrolysisGenerator:
        case Blocks.surgeCrucible: // Erekir
        case Blocks.slagCentrifuge: // Erekir
        case Blocks.slagHeater: // Erekir
        case Blocks.disassembler:
        case Blocks.separator:
          b.liquids.set(Liquids.slag, 10);
          break;
      }
      switch(b.block) {
        // THORIUM //
        case Blocks.rtgGenerator:
        case Blocks.phaseSynthesizer: // Erekir
          b.items.set(Items.thorium, 10); 
          break;
      }

        ////// EREKIR //////

      switch(b.block) {
        // GRAPHITE // 
        case Blocks.carbideCrucible:
        case Blocks.siliconArcFurnace:
        case Blocks.cyanogenSynthesizer:
          b.items.set(Items.graphite, 10);  
          break;
      }
      switch(b.block) {
        // OXIDATION //
        case Blocks.oxidationChamber:
          b.items.set(Items.beryllium, 10);  
          break;
      }
      switch(b.block) {
        // PHASE //
        case Blocks.neoplasiaReactor:
        case Blocks.rtgGenerator:
        case Blocks.regenProjector:
        case Blocks.forceProjector:
        case Blocks.overdriveDome: 
        case Blocks.mendProjector:
        case Blocks.phaseHeater:
          b.items.set(Items.phaseFabric, 10);
          break;
      }
      switch(b.block) {
        // TUNGSTEN //
        case Blocks.carbideCrucible:
          b.items.set(Items.tungsten, 10);
          break;
      }
      switch(b.block) {
        // Arkycite //
        case Blocks.neoplasiaReactor:
        case Blocks.pyrolysisGenerator:
        case Blocks.chemicalCombustionChamber:
        case Blocks.cyanogenSynthesizer:
          b.liquids.set(Liquids.arkycite, 10);
          break;
      }
      switch(b.block) {
        // Ozone //
        case Blocks.chemicalCombustionChamber:
        case Blocks.phaseSynthesizer:
          b.liquids.set(Liquids.ozone, 10);
          break;
      }
      switch(b.block) {
        // NITROGEN //
        case Blocks.buildTower:
          b.liquids.set(Liquids.nitrogen, 10);
          break;
      }
      switch(b.block) {
        // HYDROGEN //
        case Blocks.regenProjector:
        case Blocks.reinforcedPump:
          b.liquids.set(Liquids.hydrogen, 10);
          break;
      }
      switch(b.block) {
        // CYANOGEN //
        case Blocks.fluxReactor:
        case Blocks.shockwaveTower:
          b.liquids.set(Liquids.cyanogen, 10);
          break;
      }
    })
});