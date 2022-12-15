import open3d as o3d

def use_o3d():

    for i in range(100):
        name = str(i)
        mesh = o3d.io.read_triangle_mesh("GeneratedModels/Pyramid/pyramid" + name + ".ply")
        o3d.io.write_triangle_mesh("../public/glb/Pyramid/pyramid" + name +".glb", mesh)
        mesh.compute_vertex_normals()
#        o3d.visualization.draw_geometries([mesh])

if __name__ == "__main__":
    use_o3d()