from plyfile import PlyData
from argparse import ArgumentParser
import numpy as np
import os

def create_datafile(arr_vertex, ply_path):
    """"Create a file.txt with the data using the original name"""
    filename = ply_path[:-4]
    filename = filename + '.txt'
    filename = filename.rsplit('/', 1)
    filename = filename[-1]
    print(filename)
    if not os.path.exists("DataFiles"):
        os.makedirs("DataFiles")
    f = open(os.path.join("DataFiles", filename), "w")
    f.write(str(arr_vertex))
    f.close()
    

def get_data(ply_path, color=None):
    """ Take a path as argument and parse the .ply file to get the x,y,z """
    try:
        plydata = PlyData.read(ply_path)
    except:
        print('FileError: bad format file')
        raise SystemExit
    arr_data = np.array(plydata['vertex'].data)
    arr_list = [list(t) for t in arr_data]
    arr_list = [xyz[:3] for xyz in arr_list]
    arr_list = [tuple(l) for l in arr_list]
    arr_vertex = np.zeros(len(arr_list))
    arr_vertex = arr_list
    create_datafile(arr_vertex, ply_path)

def parse_args():
    """ parse args """
    parser = ArgumentParser()
    parser.add_argument('ply_path')
    parser.add_argument('--color', default=None, required=False)
    args = parser.parse_args()
    return args.ply_path, args.color

def main():
    ply_path, color = parse_args()
    get_data(ply_path, color)
    
    
if __name__ == '__main__':
    main()