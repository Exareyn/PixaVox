#!/usr/bin/env python3

import open3d as o3d

def use_o3d():
    mesh = o3d.io.read_triangle_mesh("./GeneratedModels/Pyramid/pyramid102.ply")
    o3d.io.write_triangle_mesh("copy_of_knot.glb", mesh)
    mesh.compute_vertex_normals()
    o3d.visualization.draw_geometries([mesh])

if __name__ == "__main__":
    use_o3d()
