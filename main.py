#!/usr/bin/env python3

import open3d as o3d
import plyfile
from plyfile import PlyData, PlyElement
import sys
import numpy as np

def use_o3d():
    mesh = o3d.io.read_triangle_mesh("./GeneratedModels/Pyramid/pyramid102.ply")
    o3d.io.write_triangle_mesh("copy_of_knot.glb", mesh)
    mesh.compute_vertex_normals()
    o3d.visualization.draw_geometries([mesh])

def transform_array_to_ply_file(array, filename):
    vertex_data = np.array(array, dtype=[("x", "f4"), ("y", "f4"), ("z", "f4")])

    vertex = PlyElement.describe(
        vertex_data,
        "vertex",
        comments=["Liste des sommets du mesh"]
    )

    ply_data = PlyData([vertex])
    ply_data.write(f"{filename}.ply")

if __name__ == "__main__":
    use_o3d()
