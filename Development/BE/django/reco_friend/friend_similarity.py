import mysql.connector
import numpy as np
import pandas as pd
from numpy import dot
from numpy.linalg import norm
import json
from collections import OrderedDict
 
arr = np.array([
            [3, 3, 3, 4, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [3, 3, 4, 3, 4, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [3, 4, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 3, 3, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0],
            [3, 4, 3, 3, 3, 3, 3, 4, 2, 2, 2, 2, 1, 1, 1, 1],
            [4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1],
            [3, 3, 3, 3, 3, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 4],
            [3, 3, 4, 3, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 0, 4, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 2, 4],
            [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 4, 2, 4, 2],
            [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 2, 4],
            [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 4, 2, 2, 2],
            [0, 0, 0, 0, 1, 2, 1, 1, 2, 4, 2, 4, 3, 3, 3, 3],
            [0, 0, 0, 0, 1, 2, 1, 1, 4, 2, 4, 2, 3, 3, 3, 3],
            [0, 0, 0, 0, 1, 2, 1, 1, 2, 4, 2, 2, 3, 3, 3, 3],
            [0, 0, 0, 0, 1, 2, 4, 1, 4, 2, 4, 2, 3, 3, 3, 3],
            ])
mbti = pd.DataFrame(arr, index=['INFP','ENFP','INFJ','ENFJ','INTJ','ENTJ','INTP','ENTP','ISFP','ESFP','ISTP','ESTP','ISFJ','ESFJ','ISTJ','ESTJ'],  columns=['INFP','ENFP','INFJ','ENFJ','INTJ','ENTJ','INTP','ENTP','ISFP','ESFP','ISTP','ESTP','ISFJ','ESFJ','ISTJ','ESTJ'])

    
#------------------ 코사인 유사도 ----------------#
#------------------ 벡터 두개를 넣으면 됨 (np.array([0,1,1,1])) ----------------#
def cos_sim(A, B):
    return dot(A, B)/(norm(A)*norm(B))
#------------------------------------------------------#

#---------------- 나, 차단 멤버 제외 멤버 수------------------------#
def membercnt(cursor, memberId):
    sql = "select count(*) from member where not member_id=%s and face_id is not null and member_id not in (select to_member_id from friend where from_member_id = %s)"
    cursor.execute(sql, (memberId, memberId,))
#------------------------------------------------------#

#---------------- 해당 id, 차단 멤버 제외 다른 멤버 id들 반환------------------------#
def membersid(cursor, memberId):
    sql = "select member_id from member where not member_id=%s and face_id is not null and member_id not in (select to_member_id from friend where from_member_id = %s);"
    cursor.execute(sql, (memberId,memberId,))
#------------------------------------------------------#

# =================================================================================================================================

#------------------ 입력 받은 id에 해당하는 본인 동물상 조회 ----------------#
def myface(cursor, memberId):
    sql = "select * from face where face_id in (select face_id from member where member_id=%s);"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id에 해당하는 본인이 선호하는 동물상 조회 ----------------#
def mypreferface(cursor, memberId):
    sql = "select * from face where face_id in (select prefer_face_id from member where member_id=%s);"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id에 해당하는 나의 mbti 가져오기----------------#
def mymbti(cursor, memberId):
    sql = "select member_id, mbti from member where member_id=%s;"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

# =================================================================================================================================


#------------------ 입력 받은 id, 차단 유저를 제외한 다른 유저들 동물상 조회 ----------------#
def otherface(cursor, memberId):
    sql = "select * from face where face_id in (select face_id from member where member_id not in (select to_member_id from friend where from_member_id = %s ) and not member_id=%s);"
    cursor.execute(sql, (memberId, memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id를 제외한 다른 유저들이 선호하는 동물상 조회 ----------------#
def otherpreferface(cursor, memberId):
    sql = "select * from face where face_id in (select prefer_face_id from member where member_id not in (select to_member_id from friend where from_member_id = %s ) and not member_id=%s);"
    cursor.execute(sql, (memberId, memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id를 제외한 다른 유저들의 mbti 가져오기----------------#
def othermbti(cursor, memberId):
    sql = "select member_id, mbti from member where member_id not in (select to_member_id from friend where from_member_id = %s ) and not member_id=%s and mbti is not null;"
    cursor.execute(sql, (memberId, memberId,))
#------------------------------------------------------#


#------------------ 입력 받은 id유저의 아바타 아이템 정보 받기----------------#
def items(cursor, memberId):
    sql = "select name, state from item where item_type_id=1 and member_id=%s;"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id유저의 얼굴상, mbti, 닉네임 받기----------------#
def userinfo(cursor, memberId):
    sql = "select face_name, mbti, nickname from member where member_id=%s; "
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

def friend_recom(memberId):

    try:

# #       나의 멤버인덱스 ( 장고로 api작성해서 받아올 것 )
    
        myinfo = [] # 나의 유저정보
        mbtiinfo = [] # 나와 다른 유저의 mbti 궁합도
        otherinfo = []    # 본인 제외 나머지 유저리스트 생성
        memberIds = [] # 본인을 제외한 다른 나머지 멤버 아이디들
        
        mysql_con = mysql.connector.connect(host='j8a705.p.ssafy.io', port='3306', database='omz', user='omz', password='omz7581')
        mysql_cursor = mysql_con.cursor(dictionary=True)        
      
#       멤버 수 찾기
        membercnt(mysql_cursor, memberId)
        
        for row in mysql_cursor:
            usercnt = row['count(*)']
            
#         print("유저 수 = " + str(usercnt))
        
#       본인 제외 다른 멤버 id들 찾기
        membersid(mysql_cursor, memberId)
        
        for row in mysql_cursor:
            userId = row['member_id']
            memberIds.append(userId)
        
#         print(memberIds)
        
        facename = ['bear_probability', 'cat_probability', 'dino_probability', 'dog_probability', 'fox_probability', 'rabbit_probability']
        
#         내 유저정보 (나의 동물상 정도 (강아지, 고양이, ..., 공룡) , 선호하는 동물상 정도 (강아지, 고양이, ..., 공룡))
#       {'face_id': 6, 'bear_probability': 0.1, 'cat_probability': 0.2, 'dino_probability': 0.0, 'dog_probability': 0.0, 'fox_probability': 0.5, 'rabbit_probability': 0.2, 'dinosaur_probability': 0.0}
#         나의 닮은 동물상 
        myface(mysql_cursor, memberId)
        
        for row in mysql_cursor:
            for i in range(6):
                myinfo.append(row[facename[i]])

#       내가 선호하는 동물상 정도 
        mypreferface(mysql_cursor, memberId)
      
        for row in mysql_cursor:
            for i in range(6):
                myinfo.append(row[facename[i]])
        
#       나를 제외한 다른 유저정보 (선호하는 동물상 정도 (강아지, 고양이, ..., 공룡), 본인의 동물상 정도 (강아지, 고양이, ..., 공룡))
#       {'face_id': 6, 'bear_probability': 0.1, 'cat_probability': 0.2, 'dino_probability': 0.0, 'dog_probability': 0.0, 'fox_probability': 0.5, 'rabbit_probability': 0.2, 'dinosaur_probability': 0.0}            
#       나를 제외한 다른 유저들 정보 저장 
        for i in range(usercnt):
            otherinfo.append([])
            
#       본인이 선호하는 동물상

        otherpreferface(mysql_cursor, memberId)

        for i,face in enumerate(mysql_cursor):
            for j in range(6):
                otherinfo[i].append(face[facename[j]])    
#       본인의 동물상
 
        otherface(mysql_cursor, memberId)

        for i,face in enumerate(mysql_cursor):
            for j in range(6):
                otherinfo[i].append(face[facename[j]])

        
        
#         print(type(myinfo))
#         print(myinfo)
#         print()
        otherinfo = pd.DataFrame(np.array(otherinfo), index=memberIds)
#         print(otherinfo)
        
        similaritylist = []
#         print(memberIds)
        for i in memberIds:
            
            otheruserinfo = otherinfo.loc[i].values.tolist()
#             print("=======================")
#             print(np.array(otheruserinfo).reshape(-1).shape)
#             print("=======================")
        
            similarity = cos_sim(np.array(myinfo).reshape(-1), np.array(otheruserinfo).reshape(-1))
        
#             print(otheruserinfo[0])
#             print(type(otheruserinfo))
            similaritylist.append(similarity)
        
#         print("====================결과=================")
#         print(np.array(memberIds).reshape(-1,1))
#         print(np.array(similaritylist).reshape(-1,1))
        
    
#       mbti 점수 (빨강 ~ 파랑)
        vallist = []
        simimean = np.mean(np.array(similaritylist))
        simistd = np.std(np.array(similaritylist))
        for i in range(-2, 3):
            vallist.append(simimean + simistd*i)
    
        
        mymbti(mysql_cursor, memberId)
        
        for row in mysql_cursor:
            mymbtival = row['mbti']
        
        othermbti(mysql_cursor, memberId)
        
        mbtisimi = []
        for row in mysql_cursor: 
            mbtisimi.append(vallist[mbti[mymbtival][row['mbti']]])

        simi = np.array(mbtisimi) + np.array(similaritylist)
        
        result = np.concatenate([np.array(memberIds).reshape(-1,1), simi.reshape(-1,1)], -1)
        result = result[result[:, 1].argsort()][::-1][:3]
        
        if result[0][1] > 1:
            for i in range(3):
                result[i][1] -= (result[0][1]-1)

        mysql_cursor.close()
        
        userInfo = []
        userInfo.append(OrderedDict())
        userInfo.append(OrderedDict())
        userInfo.append(OrderedDict())
        mysql_cursor = mysql_con.cursor(dictionary=True)  
                
        for i in range(len(result)):
    
            userinfo(mysql_cursor, result[i][0])
            
            for j, row in enumerate(mysql_cursor):
                userInfo[i]['mbti'] = row['mbti']
                userInfo[i]['nickname'] = row['nickname']
                userInfo[i]['animal'] = row['face_name']
                
            userInfo[i]['memberId'] = int(result[i][0])
                
            items(mysql_cursor, result[i][0])
            
            hat = 0
            glasses = 0
            wing = 0
            
            for j, row in enumerate(mysql_cursor):
                if(row['name'] == 'hat'):
                    hat = row['state']
                elif(row['name'] == 'glasses'):
                    glasses = row['state']
                elif(row['name'] == 'wing'):
                    wing = row['state']
            userInfo[i]['items'] = {'hat': hat, 'glasses' : glasses, 'wing':wing,}
                
            userInfo[i]['result'] = result[i][1]
        
        return(json.dumps(userInfo, ensure_ascii=False, indent="\t"))
        
    except Exception as e:
        print(e.message)

        #df.to_numpy() // dataframe to numpy

    finally:
        if mysql_con is not None:
            mysql_con.close()