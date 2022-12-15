source code :

```
import voxelfuse as vf
from quad_mesh_simplify import simplify_mesh

if __name__=='__main__':  
    for i in range(1, 200):
        model = vf.pyramid(1, i + 5, i + 5)
        modelResult = model.dilate(0, vf.Axes.XYZ)
        mesh = vf.Mesh.fromVoxelModel(modelResult)
        name = 'pyramid' + str(i)
        mesh.export('../GeneratedModels/Pyramid/' + name + '.ply')
```

Generating 200 pyramide  
Base size Start: 5  
Base height: 5  
end size: 1  
Step between gen: +1  