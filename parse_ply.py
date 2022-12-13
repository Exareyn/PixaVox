from plyfile import PlyData, PlyElement
import numpy as np

plydata = PlyData.read('test1.ply')
arr_data = np.array(plydata['vertex'].data)
test = [list(t) for t in arr_data]
test = [xyz[:3] for xyz in test]
test = [tuple(l) for l in test]
arr_vertex = np.zeros(len(test))
arr_vertex = test
print(len(arr_vertex))
print(arr_vertex)