Events.run(Trigger.update, () => {
    Groups.build.each(b => {
      if(b.block != Blocks.graphitePress) return;
      b.items.set(Items.coal, 10);
    })
  });