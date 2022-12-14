#!/usr/bin/env python3

import sys
from sphere import *

def display_help():
    """Display help to launch code
    """
    print("USAGE")
    print("\t./generate t n\n")
    print("DESCRIPTION")
    print("\tt\ttype of data to generate (s = sphere, p = pyramid, c = cube)")
    print("\tn\tNumber to to generate range: [1;+inf] (default = 5)")

def main(av):
    if len(av) < 2:
        display_help()
        sys.exit(84)
    elif len(av) > 3:
        display_help()
        sys.exit(84)
    else:
        parsed_args = [x for ind, x in enumerate(av) if ind != 0]
        if not parsed_args[0] in ("s", "p", "c"):
            display_help()
            sys.exit(84)
        if len(parsed_args) == 1:
            parsed_args.append(5)
        try:
            parsed_args[1] = int(parsed_args[1])
        except:
            parsed_args[1] = None
        if parsed_args[1] is None or parsed_args[1] < 1:
            display_help()
            sys.exit(84)
        generates = {
            's': generate_new_spheres,
            'p': generate_new_spheres,
            'c': generate_new_spheres,
        }
        generates[parsed_args[0]](parsed_args[1])

# def use_o3d():
#     mesh = o3d.io.read_triangle_mesh("./ply/colored/Monument1.ply")
#     mesh.compute_vertex_normals()
#     o3d.visualization.draw_geometries([mesh])

if __name__ == "__main__":
    main(sys.argv)
