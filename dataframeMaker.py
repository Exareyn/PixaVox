from plyfile import PlyData
from argparse import ArgumentParser
import numpy as np
import os
import pandas as pd

def create_datafile(arr_vertex, df, label):
    """"Create a file.txt with the data using the original name"""
    df['data'] = pd.Series([arr_vertex])
    df['label'] = label
    df.to_csv("dataset.csv")
    
    
     
    
    
    
    # filename = ply_path[:-4]
    # filename = filename + '.txt'
    # filename = filename.rsplit('/', 1)
    # filename = filename[-1]
    # print(filename)
    # if not os.path.exists("DataFiles"):
    #     os.makedirs("DataFiles")
    # f = open(os.path.join("DataFiles", filename), "w")
    # f.write(str(arr_vertex))
    # f.close()
    

def get_data(dir_path, label):
    """ Take a path as argument and parse the .ply file to get the x,y,z """
    files = os.listdir(dir_path)
    df = pd.DataFrame(columns=['data', 'label'])

    for file in files:
        try:
            plydata = PlyData.read(dir_path + file)
        except:
            print('FileError: bad format file')
            raise SystemExit
        arr_data = np.array(plydata['vertex'].data)
        arr_list = [list(t) for t in arr_data]
        arr_list = [xyz[:3] for xyz in arr_list]
        arr_list = [tuple(l) for l in arr_list]
        arr_vertex = np.zeros(len(arr_list))
        arr_vertex = arr_list
        create_datafile(arr_vertex, df, label)

def parse_args():
    """ parse args """
    parser = ArgumentParser()
    parser.add_argument('dir_path')
    args = parser.parse_args()
    return args.dir_path

def main():
    dir_path = parse_args()
    label = dir_path[:-1].lower()
    # df = pd.read_csv('dataset.csv')
    # print(df['data'][1400])
    # exit()
    get_data(dir_path, label)
    
    
if __name__ == '__main__':
    main()