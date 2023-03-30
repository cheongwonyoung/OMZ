import mysql.connector
import numpy as np
import pandas as pd
from numpy import dot
from numpy.linalg import norm
 
#------------------ 코사인 유사도 ----------------#
#------------------ 벡터 두개를 넣으면 됨 (np.array([0,1,1,1])) ----------------#
def cos_sim(A, B):
    return dot(A, B)/(norm(A)*norm(B))
#------------------------------------------------------#

#---------------- 멤버 수------------------------#
def membercnt(cursor):
    sql = "select count(*) from member where face_id is not null;"
    cursor.execute(sql)
#------------------------------------------------------#

#---------------- 해당 id 제외 다른 멤버 id들 반환------------------------#
def membersid(cursor, memberId):
    sql = "select member_id from member where not member_id=%s and face_id is not null;"
    cursor.execute(sql, (memberId,))
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


#------------------ 입력 받은 id를 제외한 다른 유저들 동물상 조회 ----------------#
def otherface(cursor, memberId):
    sql = "select * from face where face_id in (select face_id from member where not member_id=%s);"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id를 제외한 다른 유저들이 선호하는 동물상 조회 ----------------#
def otherpreferface(cursor, memberId):
    sql = "select * from face where face_id in (select prefer_face_id from member where not member_id=%s);"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#

#------------------ 입력 받은 id를 제외한 다른 유저들의 mbti 가져오기----------------#
def othermbti(cursor, memberId):
    sql = "select member_id, mbti from member where not member_id=%s and mbti is not null;"
    cursor.execute(sql, (memberId,))
#------------------------------------------------------#


def friend_recom(memberId):

    try:

# #       나의 멤버인덱스 ( 장고로 api작성해서 받아올 것 )
        # memberId = 1
        myinfo = [] # 나의 유저정보
        mbtiinfo = [] # 나와 다른 유저의 mbti 궁합도
        otherinfo = []    # 본인 제외 나머지 유저리스트 생성
        memberIds = [] # 본인을 제외한 다른 나머지 멤버 아이디들
        
        mysql_con = mysql.connector.connect(host='j8a705.p.ssafy.io', port='3306', database='omz', user='omz', password='omz7581')
        mysql_cursor = mysql_con.cursor(dictionary=True)        
      
#       멤버 수 찾기
        membercnt(mysql_cursor, )
        
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
        for i in range(usercnt-1):
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

        mysql_cursor.close()
        
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
        result = np.concatenate([np.array(memberIds).reshape(-1,1), np.array(similaritylist).reshape(-1,1)], -1)
#         print(result)
#         print(result.shape)
        
        return(result[result[:, 1].argsort()][::-1][:3])
        
        
    except Exception as e:
        print(e.message)

        #df.to_numpy() // dataframe to numpy

    finally:
        if mysql_con is not None:
            mysql_con.close()