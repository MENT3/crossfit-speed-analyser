export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      analysis: {
        Row: {
          created_at: string
          id: number
          movement_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          movement_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          movement_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_movement_id_fkey"
            columns: ["movement_id"]
            referencedRelation: "movements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      movements: {
        Row: {
          created_at: string
          id: number
          key: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          key: string
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          key?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      values: {
        Row: {
          analysis_id: number
          created_at: string
          id: number
          percent: number
          speed: number
        }
        Insert: {
          analysis_id: number
          created_at?: string
          id?: number
          percent: number
          speed: number
        }
        Update: {
          analysis_id?: number
          created_at?: string
          id?: number
          percent?: number
          speed?: number
        }
        Relationships: [
          {
            foreignKeyName: "values_analysis_id_fkey"
            columns: ["analysis_id"]
            referencedRelation: "analysis"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
